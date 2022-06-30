import { BiCheck } from 'react-icons/bi';
import './SortMenu.css';
import PropTypes from 'prop-types';

const SortMenu = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    return (
        <section id='sortMenu'>
            <h4 className='sortMenuLabel'>sort by</h4>
            <button
                onClick={() => onSortByChange('likeCount')}
                className='menuItem'>
                likes {sortBy === 'likeCount' && <BiCheck id='checkMark' />}
            </button>
            <button onClick={() => onSortByChange('id')} className='menuItem'>
                date added {sortBy === 'id' && <BiCheck id='checkMark' />}
            </button>
            <button
                onClick={() => onSortByChange('message')}
                className='menuItem'>
                message {sortBy === 'message' && <BiCheck id='checkMark' />}
            </button>
            <h4 className='sortMenuLabel'>order</h4>
            <button onClick={() => onOrderByChange('asc')} className='menuItem'>
                ascending {orderBy === 'asc' && <BiCheck id='checkMark' />}
            </button>
            <button
                onClick={() => onOrderByChange('desc')}
                className='menuItem'>
                descending {orderBy === 'desc' && <BiCheck id='checkMark' />}
            </button>
        </section>
    );
};

SortMenu.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onSortByChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    onOrderByChange: PropTypes.func.isRequired,
};

export default SortMenu;
