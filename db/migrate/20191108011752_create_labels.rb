class CreateLabels < ActiveRecord::Migration[5.2]
  def change
    create_table :labels do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.integer :note_id
      t.timestamps
    end

    add_index :labels, [ :name, :user_id ], unique: true
    add_index :labels, [ :name, :note_id ], unique: true

  end
end
