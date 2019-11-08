
@labels.each do |label|
  json.set! label.id do
    json.extract! label, :id, :name, :user_id
  end
end
