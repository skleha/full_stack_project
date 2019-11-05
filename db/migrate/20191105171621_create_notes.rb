class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :body
      t.integer :author_id, null: false
      t.boolean :pinned, default: false
      t.string :color
      t.string :img_url
      t.datetime :reminder
      t.boolean :archived, default: false
      t.timestamps
    end

    add_index :notes, :author_id

  end
end
