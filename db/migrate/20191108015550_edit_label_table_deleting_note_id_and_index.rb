class EditLabelTableDeletingNoteIdAndIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :labels, name: :index_labels_on_name_and_note_id
  end
end
