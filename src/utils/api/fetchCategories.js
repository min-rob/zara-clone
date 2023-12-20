export async function fetchCategories(index) {
    try {
        const response = await fetch("http://localhost:4000/categories");
        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        return data[index].subcategories;
    } catch (error) {
        // Handle errors or log them
        console.error("Error fetching categories:", error);
        return null;
    }
}
