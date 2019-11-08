class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.integer :note_id, null: false
      t.integer :label_id, null: false
      t.timestamps
    end

    add_index :assignments, [ :note_id, :label_id ], unique: true
    
  end
end
