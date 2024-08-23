$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbw_RULktilDTMb-B-ikCUtg9DFCRM7da-K2XgZss10y9kR8tb-PbJdli8u1lvscrvC0/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="https://google.com"
        },
        error:function (err){
            alert("Form submitted successfully")

        }
    })
})
// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbxwxJHMH498Vs1ytqPwqKGtFmdFmsrI1XCbk-wxl6Na1LV1QxWQ4J_AwCmyxQrk9geXnw/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             // window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Form submitted successfully")

//         }
//     })
// })