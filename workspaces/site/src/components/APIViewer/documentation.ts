import { JSONOutput } from 'typedoc';
import documentation from '../../assets/documentation.json';

const doc: JSONOutput.ProjectReflection = documentation;

const documentationMapByName: { [key: string]: JSONOutput.Reflection } = {};
const documentationMapNameById: { [key: number]: [string, string] } = {};

if (doc.children) {
  doc.children.forEach((module) => {
    module.children && module.children.forEach((exprt) => {
      documentationMapNameById[exprt.id] = [module.name, exprt.name];
      documentationMapByName[`${module.name},${exprt.name}`] = exprt;
    });
  });
}

export const getById = (id: number) => documentationMapByName[documentationMapNameById[id].toString()];
export const getByModuleAndName = (moduleName: string, exportName: string) => documentationMapByName[`${moduleName},${exportName}`];
export const getModuleNameById = (id: number) => documentationMapNameById[id] || [];
