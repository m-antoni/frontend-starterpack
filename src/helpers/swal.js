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

export const SwalWarning = (title, message, callback) => {
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6967CE',
        cancelButtonColor: '#fa626b',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            callback();
        }
    })
}


export const SwalFormWarning = (title, message, confirm, cleanUp) => {
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#6967CE',
        cancelButtonColor: '#fa626b',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            confirm();
        }
        cleanUp()
    })
}