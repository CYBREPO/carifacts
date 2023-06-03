class brand{
    public static getBrands = "brand/getBrands";
    public static getAllBrands = "brand/getAllBrands";
    public static setBrands = "brand/setBrands";

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

export class ApiUrls{
    public static brand = brand;
    public static vehicle = vehicle;
    public static location = location;
    public static mail = mail;
}