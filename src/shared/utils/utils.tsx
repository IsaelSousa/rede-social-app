import CryptoJS from 'crypto-js';

export class Utils {

    public static EncryptData(data: any) {
        const key = process.env.NEXT_PUBLIC_APP_ENCRYPTED_KEY;
        if (key) {
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(key), {
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.ECB
            });
            const hash = encryptedData.toString();
            return hash;
        } else return '';
    }

}