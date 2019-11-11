
@assignments.each do |assignment|
  json.set! assignment.id do
    json.extract! assignment, :id, :note_id, :label_id
  end
end
