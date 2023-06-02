export class Company {
  id!:number;
  companyName!:string;
  constructor(companyName:string){
    this.companyName=companyName;
  }

  public get company() : string {
    return this.companyName;
  }

}
