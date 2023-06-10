class brand{
    public static getBrands = "brand/getBrands";
    public static getAllBrands = "brand/getAllBrands";
    public static setBrands = "brand/setBrands";
    public static updateBrand = "brand/updateBrand";
    public static deleteBrand = "brand/deleteBrand";
    public static setModels = "brand/setModels";

}

class vehicle{
    public static getVehicle = "vehicle/getVehicle";
    public static setVehicleDetails = "vehicle/setVehicleDetails";
    public static getFilteredVehicleDetails = "vehicle/getFilteredVehicleDetails";
    public static getAdditionDetails = "vehicle/getAdditionDetails";
}
class location{
    public static getLocationVechile = "location/getLocationVechile";

}
class mail{
    public static sendMail = "email/sendemail";

}
class host{
    public static createHost = "host/createHost";
    public static getAllHost = "host/getAllHost";

}
class account{
    public static login = "account/login";
    public static register = "account/register";
    public static resetPassword = "account/reset-password";
    public static updatePassword = "account/updatePassword";
    public static updateUser = "account/updateUser";

}

export class ApiUrls{
    public static brand = brand;
    public static vehicle = vehicle;
    public static location = location;
    public static mail = mail;
    public static host = host;
    public static account = account;
}