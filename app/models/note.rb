class Note < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :assignments,
    foreign_key: :note_id,
    class_name: :Assignment

  has_many :labels,
    through: :assignments,
    source: :label

end
