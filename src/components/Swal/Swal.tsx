import Swal from 'sweetalert2';

const showAlert = () => {
  Swal.fire({
    title: 'Product Updated!',
    text: 'The product was updated successfully.',
    icon: 'success',
    confirmButtonText: 'OK',
  });
};

showAlert();
