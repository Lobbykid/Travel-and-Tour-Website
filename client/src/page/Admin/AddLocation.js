import React, { useState, useEffect } from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";
import "./AddLocation.css";

// URL API của bạn
const apiUrl = "http://localhost:8080/location"; // Cập nhật URL API của bạn

const service = {
  fetchItems: async () => {
    try {
      const response = await fetch(apiUrl); // Gọi API GET
      const locations = await response.json();
      return locations; // Dữ liệu trả về từ API
    } catch (error) {
      console.error("Error fetching locations:", error);
      return [];
    }
  },
  create: async location => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(location)
      });
      const newLocation = await response.json();
      return newLocation;
    } catch (error) {
      console.error("Error creating location:", error);
      return null;
    }
  },
  update: async data => {
    try {
      const response = await fetch(`${apiUrl}/${data.location_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const updatedLocation = await response.json();
      return updatedLocation;
    } catch (error) {
      console.error("Error updating location:", error);
      return null;
    }
  },
  delete: async data => {
    try {
      await fetch(`${apiUrl}/${data.location_id}`, {
        method: 'DELETE'
      });
      return data;
    } catch (error) {
      console.error("Error deleting location:", error);
      return null;
    }
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" },
  imgPreview: { maxWidth: "150px", margin: "10px 0" }
};

// Component để hiển thị ảnh thay vì đường dẫn
const ImageDisplay = ({ value }) => {
  if (!value) return null;
  return (
    <img
      src={value} // Hiển thị hình ảnh từ URL
      alt="Image Preview"
      style={{ width: 100, height: 100, objectFit: 'cover' }} // Đảm bảo ảnh hiển thị đúng kích thước
    />
  );
};

// Component để render input file và hiển thị ảnh preview
const AddLocation = () => {
  const [filePreview, setFilePreview] = useState(null);

  // Renderer để xử lý file input và preview hình ảnh trong form
  const FileRenderer = ({ field, form }) => {
    const handleFileChange = e => {
      const file = e.target.files[0]; // Lấy file từ input
      if (file) {
        const fileURL = URL.createObjectURL(file); // Tạo URL tạm thời cho hình ảnh
        form.setFieldValue(field.name, fileURL); // Cập nhật Formik với URL của file
      }
    };

    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange} // Xử lý sự kiện thay đổi file
        />
        {form.values[field.name] && (
          <img
            src={form.values[field.name]} // Hiển thị ảnh từ Formik
            alt="Preview"
            style={{ width: '100px', height: '100px', marginTop: '10px' }}
          />
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <CRUDTable caption="Quản lý địa điểm" fetchItems={payload => service.fetchItems(payload)}>
        <Fields>
          <Field name="location_id" label=" ID" hideInCreateForm />
          <Field name="llocation_name" label="Địa điểm" placeholder="Enter location name" />
          <Field
            name="location_img"
            label="Hình ảnh"
            render={FileRenderer} // Dùng FileRenderer cho form create và update
            tableValueRenderer={ImageDisplay} // Hiển thị ảnh trong bảng thay vì URL
          />
        </Fields>

        {/* Form tạo location mới */}
        <CreateForm
          title="Location Creation"
          message="Create a new location!"
          trigger="Thêm địa điểm mới"
          onSubmit={location => service.create(location)} // Gọi API tạo location
          submitText="Thêm"
          validate={values => {
            const errors = {};
            if (!values.llocation_name) {
              errors.llocation_name = "Please provide a location name.";
            }
            if (!values.location_img) {
              errors.location_img = "Please upload an image.";
            }
            return errors;
          }}
        />

        {/* Form cập nhật location */}
        <UpdateForm
          title="Location Update Process"
          message="Update the location"
          trigger="Sửa"
          onSubmit={location => service.update(location)} // Gọi API cập nhật location
          submitText="Sửa"
          validate={values => {
            const errors = {};
            if (!values.location_id) {
              errors.location_id = "Please provide location ID.";
            }
            if (!values.llocation_name) {
              errors.llocation_name = "Please provide a location name.";
            }
            if (!values.location_img) {
              errors.location_img = "Please upload an image.";
            }
            return errors;
          }}
        />

        {/* Form xóa location */}
        <DeleteForm
          title="Location Deletion"
          message="Are you sure you want to delete this location?"
          trigger="Xóa"
          onSubmit={location => service.delete(location)} // Gọi API xóa location
          submitText="Xóa"
          validate={values => {
            const errors = {};
            if (!values.location_id) {
              errors.location_id = "Please provide location ID.";
            }
            return errors;
          }}
        />
      </CRUDTable>
    </div>
  );
};

export default AddLocation;
