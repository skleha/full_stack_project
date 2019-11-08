class DeleteNoteIdColumnInLabels < ActiveRecord::Migration[5.2]
  def change
    remove_column :labels, :note_id
  end
end
