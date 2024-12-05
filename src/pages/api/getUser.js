import supabase from "@/utils/supabaseClient";
import jwt from "jsonwebtoken";

// Get Data From Database
export default async function getUser(req, res) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // แกะ Token เพื่อดึง user_id
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.sub;

    const response = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (response.error) throw response.error;
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
