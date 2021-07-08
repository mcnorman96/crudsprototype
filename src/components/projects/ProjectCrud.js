import React, { useState, useEffect } from 'react';  
import * as firebaseDb from 'firebase/app';
import AddOrEditProject from './AddEditProject';  
  
const ProjectInfo= () => {  
  
    var [currentId, setCurrentId] = useState('');  
    var [ProjectObjects, setProjectObjects] = useState({})  

    useEffect(() => {  
        firebaseDb.child('Project').on('value', snapshot => {  
            if (snapshot.val() != null) {  
                setProjectObjects({  
                    ...snapshot.val()  
                });  
            }  else{
               setProjectObjects({});
            }
        })  
    }, [])  
  
  
    const addOrEdit = (obj) => {  
        if (currentId === '')  
            firebaseDb.child('Project').push(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
        else  
            firebaseDb.child(`Project/${currentId}`).set(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
    }  
  
    const onDelete = id => {  
        if (window.confirm('Are you sure to delete this record?')) {  
            firebaseDb.child(`Project/${id}`).remove(  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
        }  
    }  
  
    return (  
        <div ImgName="card">  
            <div ImgName="card-body pb-0">  
                <div ImgName="card">  
                    <div ImgName="card-header main-search dash-search">  
                        <h3>  
                            Project Information Details  
                    </h3>  
                    </div>  
                </div>  
                <div ImgName="row">  
                    <AddOrEditProject {...({ currentId, ProjectObjects, addOrEdit })}></AddOrEditProject>
                    <div ImgName="col-12 col-md-12">  
                        <div ImgName="card">  
                            <div ImgName="card-header">Project Management</div>  
                            <div ImgName="card-body position-relative">  
                                <div ImgName="table-responsive cnstr-record product-tbl">  
                                    <table ImgName="table table-bordered heading-hvr">  
                                        <thead>  
                                            <tr>  
                                                <th ImgName="active">Full Name</th>  
                                                <th>Roll No</th>  
                                                <th>Content</th>  
                                                <th>Img</th>  
                                                <th width="60"> </th>  
                                                <th width="60"> </th>  
                                            </tr>  
                                        </thead>  
                                        <tbody>  
                                            {  
                                                Object.keys(ProjectObjects).map((key) => (  
                                                    <tr key={key}>  
                                                        <td>{ProjectObjects[key].Title}</td>  
                                                        <td>{ProjectObjects[key].Time}</td>  
                                                        <td>{ProjectObjects[key].Content}</td>  
                                                        <td>{ProjectObjects[key].Img}</td>  
  
                                                        <td ImgName="case-record">  
                                                            <button type="button" ImgName="btn btn-info"  
                                                                onClick={() => { setCurrentId(key) }}>Edit</button>  
  
                                                        </td>  
                                                        <td> <button type="button" ImgName="btn btn-danger"  
                                                            onClick={() => { onDelete(key) }}>Delete</button></td>  
                                                    </tr>  
                                                ))  
                                            }  
                                        </tbody>  
                                    </table>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}  
  
export default ProjectInfo;  