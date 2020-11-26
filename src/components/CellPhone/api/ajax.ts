//@ts-ignore
import jQuery from 'jquery';


export const ajax = async (data:any) => {
    return new Promise(((resolve) => {
        jQuery.ajax({
            url: '/wp-admin/admin-ajax.php',
            data,
            type: 'POST',
            dataType: 'json',
            success(response: any) {
                resolve(response);
            },
        });
    }))
}
