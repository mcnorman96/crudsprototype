import React, { useState, useEffect } from 'react';  
  
const AddOrEditProject= (props) => {  
    const initialFieldValues = {  
        Title: '',  
        Time: '',  
        Content: '',  
        Img: ''  
    }  
  
    var [values, setValues] = useState(initialFieldValues)  

    useEffect(() => {  
        if (props.currentId === '')  
            setValues({ ...initialFieldValues })  
        else  
            setValues({  
                ...props.ProjectObjects[props.currentId]  
            })  
    }, [props.currentId, props.ProjectObjects])  
  
    const handleInputChange = e => {  
        var { name, value } = e.target;  
        setValues({  
            ...values,  
            [name]: value  
        })  
    }  
  
    const handleFormSubmit = e => {  
        e.preventDefault()  
        props.addOrEdit(values);  
    }  
  
    return (  
        <form autoComplete="off" onChange={handleFormSubmit}>  
            <div ImgName="col-12 col-md-12">  
                <div ImgName="card">  
                    <div ImgName="card-header" >  
                        <input value={props.currentId === "" ? "Add Project Info" : "Update Project Info"} />  
                    </div>  
                    <div ImgName="card-body">  
                        <div ImgName="center-form">  
                            <div ImgName="row">  
                                <div ImgName="col-12 col-md-6">  
                                    <div ImgName="form-group">  
                                        <label ImgName="col-form-label">Full Name<span  
                                            ImgName="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Title}  
                                            onChange={handleInputChange} type="text" ImgName="form-control" name="Title"  
                                        />  
                                    </div>  
                                </div>  
                                <div ImgName="col-12 col-md-6">  
                                    <div ImgName="form-group">  
                                        <label ImgName="col-form-label">Roll No<span  
                                            ImgName="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Time} onChange={handleInputChange} type="text" ImgName="form-control" name="Time"  
                                        />  
                                    </div>  
                                </div>  
                                <div ImgName="col-12 col-md-6">  
                                    <div ImgName="form-group">  
                                        <label ImgName="col-form-label">Content<span  
                                            ImgName="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Content} onChange={handleInputChange} type="text" ImgName="form-control" name="Content"  
                                        />  
                                    </div>  
                                </div>  
                                <div ImgName="col-12 col-md-6">  
                                    <div ImgName="form-group">  
                                        <label ImgName="col-form-label">Img<span  
                                            ImgName="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Img} onChange={handleInputChange} type="text" ImgName="form-control" name="Img"  
                                        />  
                                    </div>  
                                </div>  
                                <div ImgName="col-12 col-md-12">  
                                    <div ImgName="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value={props.currentId === "" ? "Save" : "Update"} ImgName="btn btn-success btn-block" />  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </form>  
    );  
}  
  
export default AddOrEditProject;  