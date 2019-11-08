
@labels.each do |label|
  json.set! label.id do
    json.extract! label, :name, :user_id
  end
end
