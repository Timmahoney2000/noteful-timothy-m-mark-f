export const findFolder = (folders=[], folderId)=> 
folders.find(folder=> folder.id===folderId)

export const findNotes = (notes=[], noteId)=>
notes.find(notes=> notes.id===noteId)

export const getNotes = (notes=[], folderId)=>(
(!folderId)
? notes
:notes.filter(note=> note.folderId===folderId )
)


