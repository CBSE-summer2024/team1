import { supabase } from "./dbConfig";


export const getProducts = async (pageRange:{start:number,end:number}, category='') => {
    let query = supabase
        .from("products")
        .select()
        .range(pageRange.start, pageRange.end - 1);

    if (category) {
        query = query.eq("category_id",parseInt(category));
    }

    const { data, error } = await query;

    if (error) {
        console.error("Error fetching products:", error);
        return { error };
    }

    return { data };
};

export const fetchProductById = async (id:number) => {
    const { data, error } = await supabase
        .from('products')
        .select()
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching product:', error);
        return { error };
    }

    return { data };
};

export const getCategories = async () =>{

    const { data, error } = await supabase.from("categories").select();
    if(error){
        console.error("error when fetch categories",error);
        return {error};
    }
    return {data};
}