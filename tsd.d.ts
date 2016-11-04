/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

//allow sass modules
declare module "*.scss" {
  const content:string;
  export default content;
}
declare module "*.png";
//allow html dependencies
declare module "*.html" {
  const content:string;
  export default content;
}
//allow json dependencies
declare module "*.json";
//allow file dependencies
declare module "file!*";
//allow file dependencies
declare module "raw!*";
//allow url dependencies
declare module "url!*";
//allow html dependencies
declare module "import!*";

interface ISystem {
  import(module: string): Promise<any>;
}

declare const System: ISystem;
