fetch('user.json')
    .then(res => res.json())
    .then(users => {
        const tbody = document.getElementById('tableBody');

        users.forEach(user => {
            // สร้างแถว
            const tr = document.createElement('tr');

            tr.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>
                            <b>${user.gender}</b><br>
                            ${user.position}
                        </td>
                        <td>
                            <div class="bar-container">
                                <div class="bar-fill" style="width: ${user.positionBar}%;"></div>
                            </div>
                            <small>${user.positionBar}%</small>
                        </td>
                        <td>${user.address}</td>
                    `;
            tbody.appendChild(tr);
        });
    })
    .catch(err => console.error(err));