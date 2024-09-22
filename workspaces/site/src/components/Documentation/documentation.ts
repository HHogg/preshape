import { JSONOutput } from 'typedoc';
import documentation from '../../assets/documentation.json';
import { getModuleAndApiOfCatalogItemApi, CatalogueApi } from '../../docs';
import { PageSummaryConfig } from '../Page/PageSummary';

const doc = documentation as JSONOutput.ContainerReflection;

const documentationMapByName: Record<string, JSONOutput.Reflection> = {};
const documentationMapNameById: Record<number, string> = {};

if (doc.children) {
  doc.children.forEach((exprt) => {
    documentationMapNameById[exprt.id] = exprt.name;
    documentationMapByName[exprt.name] = exprt;
  });
}

export const isDeclarationReflection = (
  reflection: JSONOutput.Reflection
): reflection is JSONOutput.DeclarationReflection =>
  reflection.variant === 'declaration';

export const isReflectionType = (
  type?: JSONOutput.SomeType
): type is JSONOutput.ReflectionType => type?.type === 'reflection';

export const getById = (id?: number) =>
  id ? documentationMapByName[documentationMapNameById[id]] : null;

export const getNameById = (id: number): string => documentationMapNameById[id];

export const getByModuleAndName = (exportName: string) =>
  documentationMapByName[exportName];

export const getIsOptional = (reflection: JSONOutput.Reflection) =>
  reflection.flags?.isOptional;

export const getTag = (reflection: JSONOutput.Reflection, tagName: string) =>
  (
    reflection.comment?.blockTags?.find(({ tag }) => tag === `@${tagName}`) ||
    {}
  ).content?.[0].text;

export const getSource = (reflection: JSONOutput.DeclarationReflection) =>
  reflection.sources?.[0]?.url;

export const getComment = (
  reflection: JSONOutput.Reflection
): string | undefined => {
  if (isDeclarationReflection(reflection) && reflection.signatures) {
    for (const signature of reflection.signatures) {
      const comment = getComment(signature);

      if (comment) {
        return comment;
      }
    }
  }

  if (
    isDeclarationReflection(reflection) &&
    isReflectionType(reflection?.type)
  ) {
    return getComment(reflection.type.declaration);
  }

  return reflection.comment?.summary?.[0]?.text;
};

type ExtendsDocumentation = {
  name: string;
  link?: string;
};

export const getExtends = (
  reflection: JSONOutput.DeclarationReflection
): ExtendsDocumentation[] => {
  if (!reflection.extendedTypes) {
    return [];
  }

  return reflection.extendedTypes
    .map((extendedType) => {
      if ('name' in extendedType) {
        const moduleNameAndApi = getModuleAndApiOfCatalogItemApi(
          extendedType.name
        );

        if (moduleNameAndApi) {
          const [moduleName, { rename, name }] = moduleNameAndApi;

          return {
            name: String(rename || name),
            link: `/components/${moduleName}#${rename || name}`,
          };
        }
      }
    })
    .filter(Boolean) as ExtendsDocumentation[];
};

export const getModuleSummary = (apis: CatalogueApi[]): PageSummaryConfig[] => {
  const validApis = apis.map(
    (api) =>
      [api, getByModuleAndName(api.name)] as [
        CatalogueApi,
        JSONOutput.DeclarationReflection,
      ]
  );

  return validApis.map(([{ rename, name }, { children = [] }]) => ({
    name: rename || name,
    children: children
      .filter((child) => !child.inheritedFrom)
      .map((child) => ({
        name: child.name,
      })),
  }));
};
