class Note < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :assignments,
    dependent: :destroy,
    foreign_key: :note_id,
    class_name: :Assignment

  has_many :labels,
    through: :assignments,
    source: :label

  def self.by_author(user_id)
    self.where(author_id: user_id)
  end

  def self.by_filter_and_author(filter, user_id)
    self.joins(:labels)
      .where(author_id: user_id)
      .where(labels: { name: filter })
  end


end
