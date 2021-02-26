const show_image='show_image'
 const action={
    show_image:(Flags)=>{

        console.log('action ======',Flags)
    return{
        type: show_image,
        payload:Flags
    }
}
}

export default action