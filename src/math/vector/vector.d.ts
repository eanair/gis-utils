declare module "vector" {
  interface ModuleType {
    cwrap: (ident: string, returnType: string, argTypes: string[]) => (...args: any[]) => any;
  }

  const Module: () => Promise<ModuleType>;
  export = Module;
}
