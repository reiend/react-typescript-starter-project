// this removes on Tsserver linting errors when toding an import

declare module "*.jpeg" {
  const content: any;
  export default content;
}

declare module "*.tsx" {
  const content: any;
  export default content;
}

declare module "*.js" {
  const content: any;
  export default content;
}
