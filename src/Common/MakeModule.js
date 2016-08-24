export default (moduleName, makeModuleDefinition) => {
  const Module = makeModuleDefinition

  Module.moduleName = moduleName

  return Module
}