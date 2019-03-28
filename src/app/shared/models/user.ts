export class User {
  constructor(
    public entityid: string,
    public firstname: string,
    public lastname: string,
    public imageId: string,
    public imageURL: string,
    public email: string,
    public phone: string,
    public salutation?: string,
    public officephone?: string,
    public mobilephone?: string,
    public homephone?: string,
  ) {}
}
