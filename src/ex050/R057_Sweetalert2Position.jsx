import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, positionFlag, e) => {
        Swal.fire({
            position: positionFlag,
            icon: 'success',
            title: flag + '되었습니다.',
            showConfirmButton: false,
            timer: 1500,
        })
    }
    render() {
        return (
            <div>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('저장', 'center')}>저장</button>
                <button onClick={e => this.saveAlert('수정', 'bottom-end')}>수정</button>
            </div>
        );
    }
}

export default R057_Sweetalert2Position;