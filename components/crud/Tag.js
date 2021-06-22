import { useEffect, useState } from "react"
import { getCookie } from "../../actions/auth";
import { createTag, listTags, removeTag } from "../../actions/tag";


const Tag = () => {
    const [values,setValues] = useState({
        name:'',
        error:'',
        success:'',
        success2:false,
        tags: [],
        removed: false,
        reload: false,
    })



    const {name,error,success,tags,removed,reload,success2} = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload]);

    const loadTags = () => {
        listTags().then(data => {
            if (data.error) {
                console.log(data.error);
            }
            else {
                setValues({...values, tags: data})
            }
        })
    }

    const showTags = () => {
        return tags.map((t,i) => {
            return (
                <button onDoubleClick={() => deleteConfirm(t.slug)} title="Double Click to delete" key={i} className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</button>
            )
        })
    }

    const handleChange = e => {
        setValues({...values, name: e.target.value, error: '', success: '', removed:''});
        // console.log(token);
    } 

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);        
        createTag({name}, token).then(data => {
            if (data.error){
                setValues({...values, error: data.error, success:''})
            }else{
                setValues({...values, error: '', success2: true, name: '', reload: !reload})
            }
        })
    } 

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure to delete this category?');
        if (answer){
            deleteTag(slug);
        }
    }

    const mouseMoveHandler = () => {
        setValues({...values, error: '',success:'',success2:false,removed:''});
    }

    const deleteTag = slug => {
        // console.log('delete',slug);
        removeTag(slug, token).then(data => {
            if (data.error){
                console.log(data.error);
            }else{
                setValues({...values, error:'', success:data.message, name: '', removed:!removed, reload:!reload});
            }
        });
    };

    const newTagForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group" noValidate>
                <label className="text-muted">Tag Name</label>
                <br />
                <input type="text" className="form-control" onChange={handleChange} value={name} />
            </div><hr />
            <div>
                <button type="submit" className="btn btn-primary">
                    Create Category
                </button>
            </div>
        </form>
    );

    const showError = () => error ? <div className="alert alert-danger">{error}</div> : '';
    const showMessage = () => success ? <div className="alert alert-danger">{success}</div> : '';
    const showSuccess = () => success2 ? <div className="alert alert-success">Category is successfully created!!!</div> : '';

    return <React.Fragment>
        {showError()}
        {showMessage()}
        {showSuccess()}
        <div onMouseMove={mouseMoveHandler}>
            {newTagForm()}
            <hr/>
            {showTags()}
        </div>
        </React.Fragment>
}

export default Tag
