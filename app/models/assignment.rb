class Assignment < ApplicationRecord
  validates :note_id, :label_id, presence: true
  validates :note_id, uniqueness: { scope: :label_id, message: "Note already has that label"}

  belongs_to :note,
    foreign_key: :note_id,
    class_name: :Note

  belongs_to :label,
    foreign_key: :label_id,
    class_name: :Label

end
