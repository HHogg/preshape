import documentationJson from '../../assets/documentation.json';

const doucmentationMapByName: { [key: string] : any } = {};
const doucmentationMapNameById: { [key: number]: any } = {};

documentationJson.children.forEach((module) => {
  module.children && module.children.forEach((exprt) => {
    doucmentationMapNameById[exprt.id] = [module.name, exprt.name];
    doucmentationMapByName[`${module.name},${exprt.name}`] = exprt;
  });
});

export const getById = (id: number) => doucmentationMapByName[doucmentationMapNameById[id]];
export const getByModuleAndName = (moduleName: string, exportName: string) => doucmentationMapByName[`${moduleName},${exportName}`];
export const getModuleNameById = (id: number) => doucmentationMapNameById[id] || [];
