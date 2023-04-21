import Swal from "sweetalert2";
const sweetError = (error) => {
  Swal.fire({
    title: `${error}`,
    icon: "error",
  });
};
const sweetSuccess = (success) => {
  Swal.fire({
    title: `${success}`,
    icon: "success",
  });
};

export { sweetError, sweetSuccess };
