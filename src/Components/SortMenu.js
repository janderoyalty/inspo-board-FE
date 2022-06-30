import { BiCheck } from 'react-icons/bi';
import './SortMenu.css';

const SortMenu = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    return (
        <div id='sortMenu'>
            <div className='sortMenuLabel'>sort by</div>
            <div
                onClick={() => onSortByChange('likeCount')}
                className='menuItem'>
                likes {sortBy === 'likeCount' && <BiCheck id='checkMark' />}
            </div>
            <div onClick={() => onSortByChange('id')} className='menuItem'>
                date added {sortBy === 'id' && <BiCheck id='checkMark' />}
            </div>
            <div onClick={() => onSortByChange('message')} className='menuItem'>
                message {sortBy === 'message' && <BiCheck id='checkMark' />}
            </div>
            <div className='sortMenuLabel'>order</div>
            <div onClick={() => onOrderByChange('asc')} className='menuItem'>
                ascending {orderBy === 'asc' && <BiCheck id='checkMark' />}
            </div>
            <div onClick={() => onOrderByChange('desc')} className='menuItem'>
                descending {orderBy === 'desc' && <BiCheck id='checkMark' />}
            </div>
        </div>
    );
};

export default SortMenu;
