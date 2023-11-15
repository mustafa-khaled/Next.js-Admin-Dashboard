import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

function AddProductPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category">
          <option value="general">Chose a category</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="laptop">Laptop</option>
        </select>
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="stock" placeholder="Stock" />
        <input type="text" name="color" placeholder="Color" />
        <input type="text" name="size" placeholder="Size" />
        <textarea
          id="desc"
          rows="16"
          name="desc"
          placeholder="Description"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProductPage;
