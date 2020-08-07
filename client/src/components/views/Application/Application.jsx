import React from 'react';
import applyStyle from '../Application/application.module.css';

function Application () {
    const cards = [
        {
            company: '삼성',
            start: '01-01',
            end: '02-01'
        },
        {
            company: '현대',
            start: '01-03',
            end: '02-03'
        }
    ];
    return (
        <div className={ applyStyle.container }>
                <div className={ applyStyle.cards }>
                    <div className={ applyStyle.cardInfo }>
                        <p>
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <div className={ applyStyle.cards }>
                    <div className={ applyStyle.cardInfo }>
                        <p>
                            Lorem ipsum dolor sit amet, 
                        </p>
                    </div>
                </div>
                <div className={ applyStyle.cards }>
                    <div className={ applyStyle.cardInfo }>
                        <p>
                            Lorem ipsum dolor sit amet, 
                        </p>
                    </div>
                </div>
                <div className={ applyStyle.cards }>
                    <div className={ applyStyle.cardInfo }>
                        <p>
                            Lorem ipsum dolor sit amet, 
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Application