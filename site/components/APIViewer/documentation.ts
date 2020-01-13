import { JSONOutput } from 'typedoc';
import documentation from '../../assets/documentation.json';

const doc: JSONOutput.ProjectReflection = documentation;

const doucmentationMapByName: { [key: string]: JSONOutput.Reflection } = {};
const doucmentationMapNameById: { [key: number]: [string, string] } = {};

if (doc.children) {
  doc.children.forEach((module) => {
    module.children && module.children.forEach((exprt) => {
      doucmentationMapNameById[exprt.id] = [module.name, exprt.name];
      doucmentationMapByName[`${module.name},${exprt.name}`] = exprt;
    });
  });
}

export const getById = (id: number) => doucmentationMapByName[doucmentationMapNameById[id].toString()];
export const getByModuleAndName = (moduleName: string, exportName: string) => doucmentationMapByName[`${moduleName},${exportName}`];
export const getModuleNameById = (id: number) => doucmentationMapNameById[id] || [];
