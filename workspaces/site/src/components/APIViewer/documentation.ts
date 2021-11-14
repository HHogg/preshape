import { JSONOutput } from 'typedoc';
import documentation from '../../assets/documentation.json';

const doc: JSONOutput.ProjectReflection = documentation;

const documentationMapByName: Record<string, JSONOutput.DeclarationReflection> =
  {};
const documentationMapNameById: Record<number, string> = {};

if (doc.children) {
  doc.children.forEach((exprt) => {
    documentationMapNameById[exprt.id] = exprt.name;
    documentationMapByName[exprt.name] = exprt;
  });
}

export const getById = (id?: number) =>
  id ? documentationMapByName[documentationMapNameById[id]] : null;
export const getNameById = (id: number): string => documentationMapNameById[id];
export const getByModuleAndName = (exportName: string) =>
  documentationMapByName[exportName];
