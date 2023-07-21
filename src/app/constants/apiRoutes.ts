class account {
    public static login = "account/login";
    public static register = "account/register";
    public static resetPassword = "account/reset-password";
    public static updatePassword = "account/updatePassword";
    public static updateUser = "account/updateUser";
    public static getUsers = "account/getUsers";
    public static updateUserStatus = "account/updateUserStatus";
    public static deleteUser = "account/deleteUser";

}
class banner {
    public static getMenus = "main/menus";
    public static getSliders = "main/sliders";
    public static savebanner = "banner/saveBanner";

    public static getAllSidebar = "banner/getAllSidebar";
    public static saveUpdateSideBar = "banner/saveUpdateSideBar";
    public static deleteSidebar = "banner/deleteSidebar";

    public static getAllSubSidebar = "banner/getAllSubSidebar";
    public static saveUpdateSubSideBar = "banner/saveUpdateSubSideBar";
    public static deleteSubSidebar = "banner/deleteSubSidebar";

}
class grid {
    public static getGrids = "main/grids";
    public static getGridSix = "grid/getGridSix";
    public static saveUpdateGridSix = "grid/saveUpdateGridSix";
    public static deleteGridSix = "grid/deleteGridSix";

    //countries
    public static getAllCountries = "grid/getAllCountries";
    public static createUpdateCountries = "grid/createUpdateCountries";
    public static deleteCountries = "grid/deleteCountries";
}
export class ApiUrls {
    public static account = account;
    public static banner = banner;
    public static grid = grid;
}

