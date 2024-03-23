import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useFormik } from "formik";
import { object, string, number, date, InferType } from "yup";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function Employee() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleDelete = (data) => {
    let localData = JSON.parse(localStorage.getItem("employee"));
    localData = localData.filter((item) => item.id !== data.id);
    localStorage.setItem("employee", JSON.stringify(localData));
    getdata();
  };

  const handleEdit = (data) => {
    console.log(data);

    formik.setValues(data);
    handleClickOpen();

    setEdit(data.id)
    setOpen(true)

  };

  const columns = [
    { field: "name", headerName: "Name", width: 90 },
    { field: "doj", headerName: "Date Of Join", width: 90 },
    { field: "salary", headerName: "Salary", width: 90 },
    {
        field: "action",
        headerName: "Action",
        width: 100,
        renderCell: (params) => (
          <>
            <IconButton
              variant="outlined"
              color="green"
              onClick={() => handleEdit(params.row)}
            >
              <EditNoteIcon />
            </IconButton>
  
            <IconButton
              variant="outlined"
              onClick={() => handleDelete(params.row)}
            >
              <DeleteSweepIcon />
            </IconButton>
          </>
        ),
      },
  ];

  let userSchema = object({
    name: string()
      .required()
      .matches(/^[a-zA-Z'-\s]*$/),
    salary: string().required().min(5,"required up to 10K"),
    doj: string().required().max(new Date())
  });

  const rNo = Math.floor(Math.random() * 1000);

  const handaladd = (values) => {
    console.log(values);

    let localdata = JSON.parse(localStorage.getItem("employee"));
    if (localdata) {
      localdata.push({ ...values, id: rNo });
      localStorage.setItem("employee", JSON.stringify(localdata));
    } else {
      localStorage.setItem(
        "employee",
        JSON.stringify([{ ...values, id: rNo }])
      );
    }
    getdata();
  };

  const getdata = () => {
    const employeegetdata = JSON.parse(localStorage.getItem("employee"));
    if (employeegetdata) {
      setData(employeegetdata);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      salary: "",
      doj: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      if (edit) {
        console.log("update");
      } else {
        handaladd(values);
      }
    },
  });

  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    formik;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <h1>Employee Form</h1>
      <div style={{ textAlign: "end", marginRight: "50px" }}>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Employee
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
              <DialogTitle>Add The Employee</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="name"
                  name="name"
                  label="name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name && touched.name ? true : false}
                  helperText={errors.name && touched.name ? errors.name : ""}
                />
                <TextField
                  margin="dense"
                  id="salary"
                  name="salary"
                  label="salary"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.salary}
                  error={
                    errors.salary && touched.salary ? true : false
                  }
                  helperText={
                    errors.salary && touched.salary
                      ? errors.salary
                      : ""
                  }
                />
                <TextField
                  margin="dense"
                  id="doj"
                  name="doj"
                //   label="Date Of Join"
                  type="date"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.doj}
                  error={errors.doj && touched.doj ? true : false}
                  helperText={errors.doj && touched.doj ? errors.doj : ""}
                  // helperText=""
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit"> {edit ? "Update" : "Add"}</Button>
              </DialogActions>
            </form>
          </Dialog>
        </React.Fragment>
      </div>
      <br />
      <br />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
