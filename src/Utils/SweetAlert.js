import Swal from 'sweetalert2';

export const SwalSuccess = message => {
    Swal.fire('Success', `${message}`, 'success');
}

export const SwalError = message => {

    if(Array.isArray(message))
    {
        let errors = message.toString();
        Swal.fire('Error', `${errors.split(",").join('<br/>')}`, 'error');
    }
    else
    {
        Swal.fire('Error', `${message}`, 'error');
    }
}

export const SwalInfo = message => {
    Swal.fire('', `${message}`, 'info');
}