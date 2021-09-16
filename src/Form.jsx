import React, { useState }  from "react";
import { Button, TextField } from "@material-ui/core";
import useStyle from './style'

const Form = () => {
   const classes = useStyle()
    const [fullData , setFullData] = useState({
        flname : "",
        studentNumber : "",
        rollNumber : "",
        email : "",
        mobileNumber : "",
        branch : "",
        residency : "",
    })

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setFullData((preValue) => {
            console.log(preValue);
            // setFullData({ ...fullData, [name]: value })
            if(name === "flName"){
                return{
                    flname : value,
                    studentNumber : preValue.studentNumer,
                    rollNumber : preValue.rollNumber,
                    email : preValue.email,
                    mobileNumber : preValue.mobileNumber,
                    branch : preValue.branch,
                    residency : preValue.residency,
                }
            }else if(name === "studentNumber"){
                return{
                    flname : preValue.flname,
                    studentNumber : value,
                    rollNumber : preValue.rollNumber,
                    email : preValue.email,
                    mobileNumber : preValue.mobileNumber,
                    branch : preValue.branch,
                    residency : preValue.residency,
                };
            }else if(name === "rollNumber"){
                return{
                    flname : preValue.flname,
                    studentNumber : preValue.studentNumber,
                    rollNumber : value,
                    email : preValue.email,
                    mobileNumber : preValue.mobileNumber,
                    branch : preValue.branch,
                    residency : preValue.residency,
                };
            }else if(name === "email"){
                return{
                    flname : preValue.flname,
                    studentNumber : preValue.studentNumber,
                    rollNumber : preValue.rollNumber,
                    email : value,
                    mobileNumber : preValue.mobileNumber,
                    branch : preValue.branch,
                    residency : preValue.residency,
                };
            }else if(name === "mobileNumber"){
                return{
                    flname : preValue.flname,
                    studentNumber : preValue.studentNumber,
                    rollNumber : preValue.rollNumber,
                    email : preValue.email,
                    mobileNumber : value,
                    branch : preValue.branch,
                    residency : preValue.residency,
                };
            }else if(name === "branch"){
                return{
                    flname : preValue.flname,
                    studentNumber : preValue.studentNumber,
                    rollNumber : preValue.rollNumber,
                    email : preValue.email,
                    mobileNumber : preValue.mobileNumber,
                    branch : value,
                    residency : preValue.residency,
                };
            }else if(name === "residency"){
                return{
                    flname : preValue.flname,
                    studentNumber : preValue.studentNumber,
                    rollNumber : preValue.rollNumber,
                    email : preValue.email,
                    mobileNumber : preValue.mobileNumber,
                    branch : preValue.branch,
                    residency : value,
                };
            } 
        })

    };

    const onSubmit = (event) => {
        event.preventDefault();
        
    }

    return(
        <>
            <div id="formmain">
                <form onSubmit={onSubmit}>
                    <input id="input1" type="text" placeholder="Full Name" name="flName" onChange={inputEvent} value={fullData.flname}/>
                    <input id="input2" type="text" placeholder="Student Number" name="studentNumber" onChange={inputEvent} value={fullData.studentNumber} />
                    <input id="input3" type="text" placeholder="Roll Number" name="rollNumber" onChange={inputEvent} value={fullData.rollNumber}/>
                    <input id="input4" type="text" placeholder="College Email" name="email" onChange={inputEvent} value={fullData.email}/>
                    <input id="input5" type="text" placeholder="Whatsapp Number" name="mobileNumber" onChange={inputEvent} value={fullData.mobileNumber}/>
                    <select id="select1" name="branch" onChange={inputEvent} value={fullData.branch}>
                        <option value="BRANCH">Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="CS">CS</option>
                        <option value="CSE(DS)">CSE(DS)</option>
                        <option value="CSE(ML)">CSE(ML & AI)</option>
                        <option value="CSIT">CSIT</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                    </select>
                    <select id="select2" name="residency" value={fullData.residency}  onChange={inputEvent}>
                        <option value="RESIDENCY">Residency</option>
                        <option value="HOSTELLER">HOSTELLER</option>
                        <option value="DAY-SCHOLAR">DAY-SCHOLAR</option>
                    </select>
                    <div id="btn">
                        <div className="btnborder">
                    <Button  type="submit" variant="contained" size="large" className={classes.button} id="submitbtn">Submit</Button>
                    </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Form;