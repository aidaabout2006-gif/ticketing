export enum TicketSource {
    //ثبت درخواست توسط کاربر
    USER_PORTAL ='USER_PORTAL',
    //ثبت تیکت توسط اپراتور
    OPERATOR ='OPERATOR',
    //ثبت تیکت از طریق ایمیل
    EMAIL = 'EMAIL',
    //ثبت از طریق فزم سایت
    WEB_FORM = 'WEB_FORM',
    //ثبت از طریق api
    API = 'API',
    //ثبت از طریق چت انلاین
    LIVE_CHAT= 'LIVE_CHAT',
    //ثبت از طریق پیام رسان
    MESSENGER = 'MESSENGER' ,
    //ثبت از طریق تلفن
    PHONE ='PHONE'

}