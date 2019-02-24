msg = "I am Robot"
print(msg.find("o"))
indexO = msg.rfind("o")
print(type(indexO))
msg = msg[0:indexO] + "x" + msg[indexO+1:len(msg)]
print(msg)
print(msg.__len__())