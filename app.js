               <span>
                    <b>
                      {item.sender === 1 && "user chat-ui-box"
                        ? capitalizeFirstLetter(item.status) + " "
                        : "" || (item.sender === 2 && "client chat-ui-box")
                        ? props.selecteduser.contact.firstName +
                          " " +
                          props.selecteduser.contact.lastName +
                          " "
                        : ""}
                    </b>
                    {timeAgo(item.createdAt)}
                  </span>
