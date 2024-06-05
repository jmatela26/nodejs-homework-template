import express from "express";
import { ctrlWrapper } from "../../helpers/ctrlWrapper.js";
// prettier-ignore
import { addContact, deleteContactById, getAllContacts, getContactById, updateContactById, updateStatusContact } from "../../controllers/contactsController.js";
import { authenticateToken } from "../../middlewares/authenticateToken.js";

const router = express.Router();

/* GET: // http://localhost:3000/api/contacts */
router.get("/", authenticateToken, ctrlWrapper(getAllContacts));

/* GET: // http://localhost:3000/api/contacts/:contactId */
router.get("/:contactId", authenticateToken, ctrlWrapper(getContactById));

/* POST: // http://localhost:3000/api/contacts/ 
{
    "name": "Josiah Matela",
    "email": "josiahmatela@example.com",
    "phone": "(639) 178-8856"
} 
*/
router.post("/", authenticateToken, ctrlWrapper(addContact));

/* DELETE: // http://localhost:3000/api/contacts/:contactId */
router.delete("/:contactId", authenticateToken, ctrlWrapper(deleteContactById));

/* PUT: // http://localhost:3000/api/contacts/:contactId 
{
    "name": "Josh Matela",
    "email": "joshmatela@example.com",
    "phone": "(639) 178-8857"
} 
*/
router.put("/:contactId", authenticateToken, ctrlWrapper(updateContactById));

/* PATCH: // http://localhost:3000/api/contacts/:contactId/favorite
{
    "favorite": true,
}
*/
// prettier-ignore
router.patch("/:contactId/favorite", authenticateToken, ctrlWrapper(updateStatusContact));

export { router };