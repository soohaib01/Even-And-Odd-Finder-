function func(){
    let inp = document.getElementById('input').value;
     if(inp === null || inp % 2 == 0){
      console.log("Inavlid Value")
        swal({
       title: `this is even number ${inp}`,
       icon:"success",
       showConfirmButton: false,
       position: 'top-end',
       timer: 1500,
});
    }else{
       swal({
       title: `this is an ODD number ${inp}`,
       icon:"warning",
});

    }
}
