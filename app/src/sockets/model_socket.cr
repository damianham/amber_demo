struct ModelSocket < Amber::WebSockets::ClientSocket
  channel "model", ModelChannel

  def on_connect
    # do some authentication here
    # return true or false, if false the socket will be closed
    true
  end

  def self.send_model(model : String, action : String, json_model : String)
    self.broadcast("message", model, action, {"data" => json_model} )
  rescue ex
    puts "Error broadcasting model #{ex.message}"
  end

  def self.send_model(model : String, action : String, hash_model : Hash(String,JSON::Any))
    self.broadcast("message", model, action, {"data" => hash_model.to_s} )
  rescue ex
    puts "Error broadcasting model #{ex.message}"
  end
end

module Sockets::Model
  def self.send_model(model : String, action : String, json_model : String)
    ModelSocket.send_model(model, action, json_model)
  end

  def self.send_model(model : String, action : String, hash_model : Hash(String,JSON::Any))
    ModelSocket.send_model(model, action, hash_model)
  end
end
